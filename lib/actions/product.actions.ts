"use server"

import { prisma } from '@/lib/prisma'
import { convertPlainObject } from "../utils"
import { LATEST_PRODUCTS_LIMIT } from '../constants'

export async function getLatestProducts() {
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc' }
    })

    return convertPlainObject(data)
}

export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({
        where: { slug: slug }
    });
}