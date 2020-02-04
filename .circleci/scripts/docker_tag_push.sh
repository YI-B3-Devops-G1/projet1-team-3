#!/bin/bash

IMAGE_TAG=$(.circleci/scripts/get_tag.sh)
echo "$DOCKERHUB_PASS" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin
docker tag "project_api":"latest" "redwappin"/"projet1_ade":$IMAGE_TAG
docker push "redwappin"/"projet1_ade":$IMAGE_TAG
docker push "redwappin"/"projet1_ade":latest
if [ "${CIRCLE_TAG}" != "" ];
then
    docker push "redwappin"/"projet1_ade":latest
fi
