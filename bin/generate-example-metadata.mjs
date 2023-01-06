#!/usr/bin/env node

import { RestParser } from "rest-cli";
import flatten from "flat";

const usage = (errorNumber = 0) => {
    console.error("Usage:  ./bin/generate-example-metadata.mjs <instance> [requestName|requestNumber]");
    process.exit(errorNumber);
}

const json2dotNotationLitteral = (j) => JSON.stringify(j)
    .replace(/^"|"$/g, "")
    .replace(/\\"/g, '"');

const json2dotNotation = (
    json,
    prefix = "post.responses.default.content.application/json.example."
) => {
    const flattened = flatten(json, { safe: false });
    const str = Object.keys(flattened)
        .map(key => `${prefix + key} = ${json2dotNotationLitteral(flattened[key])}`)
        .join("\n");
    return str;
};

/** @param {string} s */
const isInteger = (s) => Number.isInteger(Number(s));

const content2json = (o) => {
    const body = o.getBody();
    const contentType = o.headers.get("content-type");
    const json = contentType === "application/json"
        ? JSON.parse(body)
        : body.split("\n").slice(0, -1).map(s => s.replace(/\r/g, ""));
    return json;
}

///////////////////////////////////////////////////////////:

const [, , instanceName, requestName] = process.argv;

if (!instanceName) {
    console.error("Instance name needed as a first paramater!");
    usage(1);
}

// Get Response from examples.http file
const parser = new RestParser();
await parser.readFile(`./${instanceName}/examples.http`);

const requestId = isInteger(requestName) ? Number(requestName) : requestName;

if (requestId === undefined) {
    console.error("requestName needed as a second parameter (could be a string or an integer).");
    usage(2);
}

const request = await parser.get(requestId);

if (request) {
    // request
    const requestJSON = content2json(request);
    console.log(
        json2dotNotation(
            requestJSON,
            "post.requestBody.content.application/json.example.")
    );

    // response
    const { response } = await request.request();

    const responseJSON = content2json(response);
    console.log(json2dotNotation(responseJSON));
} else {
    console.error(`Request "${requestId}" not found.`);
    usage(3);
}
