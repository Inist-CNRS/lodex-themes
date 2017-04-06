#!/usr/bin/env python
# -*- coding: utf-8 -*-

""" perform recursive uploads using cadaver

cadaver does not support recursive directory upload.
This script will upload a given path to a given URL

"""

import argparse
import os
import tempfile
import subprocess
import urlparse


def create_script(dir_given, base_path):
    """create the script"""
    upload_script = []
    parent_directory = os.path.abspath(dir_given)
    def remove_first_dir(directory_path):
        """remove common ancestors of directory_path with parent_directory

        those parts should only exist locally."""
        len_common_ancestors = len(
            os.path.commonprefix([directory_path, parent_directory])
        )
        return directory_path[len_common_ancestors + 1:]
    for (path, subdirs, files) in os.walk(parent_directory):
        for subdir in subdirs:
            directory_path = os.path.join(path, subdir)
            upload_script.append(
                "mkcol %s" % remove_first_dir(directory_path)
            )
        if files:
            if remove_first_dir(path):
                upload_script.append(
                    "cd %s" % remove_first_dir(path)
                )
            for file_path in files:
                upload_script.append(
                    "put %s" % os.path.join(path, file_path)
                )
            upload_script.append("cd %s" % base_path)
    upload_script.append("quit")
    return upload_script


def run_script(script, server, base_path):
    """pass an upload script into cadaver run"""
    file_handle, file_name = tempfile.mkstemp(dir='.', prefix='davput')
    with open(file_name, 'w') as script_file:
        script_file.write("cd %s\n" % base_path)
        for line in script:
            script_file.write('%s\n' % line)
    subprocess.call(['cadaver', server, '-r', file_name])
    os.unlink(file_name)

if __name__ == '__main__':
    ARG_PARSER = argparse.ArgumentParser(
        description='Create recursive upload Script'
    )
    ARG_PARSER.add_argument('directory', metavar='dir', type=str,
                            help='Directory to upload')
    ARG_PARSER.add_argument('server', metavar='URL', type=str,
                            help='URL of webdav target directory')
    ARGS_GIVEN = ARG_PARSER.parse_args()
    BASE_PATH = urlparse.urlsplit(ARGS_GIVEN.server).path
    if not os.path.isdir(ARGS_GIVEN.directory):
        raise IOError('First argument must be directory name')
    else:
        OLD_CWD = os.getcwd()
        SCRIPT = create_script(ARGS_GIVEN.directory, BASE_PATH)
        os.chdir(ARGS_GIVEN.directory)
        run_script(SCRIPT, ARGS_GIVEN.server, BASE_PATH)
        os.chdir(OLD_CWD)