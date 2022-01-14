-- DropForeignKey
ALTER TABLE "Deliverires" DROP CONSTRAINT "Deliverires_id_deliveryman_fkey";

-- AlterTable
ALTER TABLE "Deliverires" ALTER COLUMN "ended_at" DROP NOT NULL,
ALTER COLUMN "id_deliveryman" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Deliverires" ADD CONSTRAINT "Deliverires_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "deliverymen"("id") ON DELETE SET NULL ON UPDATE CASCADE;
