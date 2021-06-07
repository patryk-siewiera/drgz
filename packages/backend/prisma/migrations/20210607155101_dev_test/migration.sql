-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR,
    "voivodeship" VARCHAR,
    "city" VARCHAR,
    "street" VARCHAR,
    "cost" INTEGER,
    "cost_negotiation" BOOLEAN,
    "Date_creation" DATE,
    "description" VARCHAR,
    "published" BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY ("id")
);
