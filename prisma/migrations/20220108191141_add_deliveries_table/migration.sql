-- CreateTable
CREATE TABLE "Deliverires" (
    "id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ended_at" TIMESTAMP(3) NOT NULL,
    "id_client" TEXT NOT NULL,
    "id_deliveryman" TEXT NOT NULL,

    CONSTRAINT "Deliverires_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Deliverires" ADD CONSTRAINT "Deliverires_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deliverires" ADD CONSTRAINT "Deliverires_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "deliverymen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
