FROM inistcnrs/lodex:12.21.0

COPY . /app/src/app/custom
RUN mv /app/src/app/custom/config.json /app

WORKDIR /app
ENTRYPOINT [ "/app/docker-entrypoint.sh" ]
CMD [ "npm", "start" ]
