"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function saveStudyConfig(configJson: string, name: string = "Mein Studium", id?: string) {
  const session = await auth()
  if (!session?.user?.id) {
    throw new Error("Unauthorized")
  }

  if (id) {
    return await prisma.studyConfiguration.update({
      where: { id, userId: session.user.id },
      data: { configJson, name },
    })
  } else {
    return await prisma.studyConfiguration.create({
      data: {
        userId: session.user.id,
        configJson,
        name,
      },
    })
  }
}

export async function deleteStudyConfig(id: string) {
  const session = await auth()
  if (!session?.user?.id) {
    throw new Error("Unauthorized")
  }

  await prisma.studyConfiguration.delete({
    where: { id, userId: session.user.id },
  })

  revalidatePath("/")
}

export async function listStudyConfigs() {
  const session = await auth()
  if (!session?.user?.id) {
    return []
  }

  return await prisma.studyConfiguration.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
  })
}

export async function getStudyConfig(id: string) {
  const session = await auth()
  if (!session?.user?.id) {
    return null
  }

  const config = await prisma.studyConfiguration.findUnique({
    where: { id, userId: session.user.id },
  })

  return config
}
