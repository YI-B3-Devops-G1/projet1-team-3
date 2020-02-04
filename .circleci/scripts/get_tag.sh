IMAGE_TAG_TMP="latest"
if [ "${CIRCLE_TAG}" == "" ];
then
    IMAGE_TAG_TMP="$CIRCLE_BUILD_NUM" 
else
    IMAGE_TAG_TMP="${CIRCLE_TAG/v/''}"
fi
printf $IMAGE_TAG_TMP