/*
  Warnings:

  - You are about to drop the `Deliverires` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Deliverires" DROP CONSTRAINT "Deliverires_id_client_fkey";

-- DropForeignKey
ALTER TABLE "Deliverires" DROP CONSTRAINT "Deliverires_id_deliveryman_fkey";

-- DropTable
DROP TABLE "Deliverires";

-- CreateTable
CREATE TABLE "deliveries" (
    "id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ended_at" TIMESTAMP(3),
    "id_client" TEXT NOT NULL,
    "id_deliveryman" TEXT,

    CONSTRAINT "deliveries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "deliverymen"("id") ON DELETE SET NULL ON UPDATE CASCADE;
