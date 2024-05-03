import { supaBase } from "@/lib/supabase/supabase";
import prisma from "@/lib/pirsma/prisma";

export async function createCourse(data) {
  const { courseImage } = data;
  const photoId = Date.now().toString();
  const photo = await uploadFileAndGetUrl(photoId, courseImage, "course");
  return await prisma.Course.create({
    data: {
      title: data.title,
      description: data.description,
      photo,
      photoId,
      price: +data.price,
      duration: +data.duration,
      learningOutcomes: data.learningOutcomes,
      instructor: {
        connect: {
          id: +data.instructorId,
        },
      },
      category: {
        connect: {
          id: +data.category,
        },
      },
    },
  });
}

async function uploadFileAndGetUrl(photoId, file, bucketName) {
  try {
    await supaBase.storage.from(bucketName).upload(photoId, file);

    const { data } = supaBase.storage.from(bucketName).getPublicUrl(photoId);
    console.log(data);
    return data.publicUrl;
  } catch (e) {
    console.error(e);
    throw new Error("Error uploading file");
  }
}

async function editFileAndGetUrl(oldPhotoId, photoId, file, bucketName) {
  try {
    await deleteOldFile(bucketName, oldPhotoId);
    return await uploadFileAndGetUrl(photoId, file, bucketName);
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function deleteOldFile(bucketName, filePath) {
  try {
    await supaBase.storage.from(bucketName).remove([filePath]);
  } catch (e) {
    console.error(e);
  }
}
