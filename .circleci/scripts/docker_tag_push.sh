IMAGE_TAG=$(.circleci/scripts/get_tag.sh)
echo "$DOCKERHUB_PASS" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin
docker tag "project_api":"latest" $IMAGE_NAME:$IMAGE_TAG
docker push $IMAGE_NAME:$IMAGE_TAG
if [ "${CIRCLE_TAG}" != "" ];
then
    docker push $IMAGE_NAME:"latest"
fi
