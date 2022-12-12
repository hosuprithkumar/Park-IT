import os
from google.cloud import videointelligence

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = "C:/Users/Suprith/Desktop/working_dir/car_parking_project/new.json"
video = videointelligence.VideoIntelligenceServiceClient()

features = [videointelligence.Feature.OBJECT_TRACKING]
uri1 = "gs://test_ve/test.mp4"
uri2 = "gs://test_ve/Car in Parking Garage - Security Camera.mp4"

operation = video.annotate_video(input_uri=uri2, features=features)

result = operation.result()

# The first result is retrieved because a single video was processed.
object_annotations = result.annotation_results[0].object_annotations
id = 'abcd'
processed = []
for object_annotation in object_annotations:
    if object_annotation.entity.entity_id not in processed:
        print("Entity description: {}".format(object_annotation.entity.description))
        print("Entity id: {}".format(object_annotation.entity.entity_id))

        print(
            "Segment: {}s to {}s".format(
                object_annotation.segment.start_time_offset.seconds
                + object_annotation.segment.start_time_offset.microseconds / 1e6,
                object_annotation.segment.end_time_offset.seconds
                + object_annotation.segment.end_time_offset.microseconds / 1e6,
            )
        )
        frame = object_annotation.frames[0]
        box = frame.normalized_bounding_box
        
        print(
            "Time offset of the first frame: {}s".format(
                frame.time_offset.seconds + frame.time_offset.microseconds / 1e6
            )
        )
        print("Bounding box position:")
        print("\tleft  : {}".format(box.left))
        print("\ttop   : {}".format(box.top))
        print("\tright : {}".format(box.right))
        print("\tbottom: {}".format(box.bottom))
        print("\n")

        print("Confidence: {}".format(object_annotation.confidence))
        i=0
        for frame in object_annotation.frames:
            True
        
        box = frame.normalized_bounding_box
        
        print(
            "Time offset of the last frame: {}s".format(
                frame.time_offset.seconds + frame.time_offset.microseconds / 1e6
            )
        )
        print("Bounding box position:")
        print("\tleft  : {}".format(box.left))
        print("\ttop   : {}".format(box.top))
        print("\tright : {}".format(box.right))
        print("\tbottom: {}".format(box.bottom))
        print("\n")
    processed.append(object_annotation.entity.entity_id)