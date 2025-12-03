-- CreateTable
CREATE TABLE "HetznerApiToken" (
    "id" TEXT NOT NULL,
    "extensionInstanceId" TEXT NOT NULL,
    "apiToken" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HetznerApiToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HetznerResourceAssignment" (
    "id" TEXT NOT NULL,
    "extensionInstanceId" TEXT NOT NULL,
    "resourceType" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "resourceName" TEXT,
    "mittwaldProjectId" TEXT,
    "mittwaldCustomerId" TEXT,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HetznerResourceAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HetznerResourceNote" (
    "id" TEXT NOT NULL,
    "extensionInstanceId" TEXT NOT NULL,
    "resourceType" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HetznerResourceNote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HetznerApiToken_extensionInstanceId_key" ON "HetznerApiToken"("extensionInstanceId");

-- CreateIndex
CREATE INDEX "HetznerResourceAssignment_extensionInstanceId_resourceType_idx" ON "HetznerResourceAssignment"("extensionInstanceId", "resourceType");

-- CreateIndex
CREATE INDEX "HetznerResourceAssignment_mittwaldProjectId_idx" ON "HetznerResourceAssignment"("mittwaldProjectId");

-- CreateIndex
CREATE INDEX "HetznerResourceAssignment_mittwaldCustomerId_idx" ON "HetznerResourceAssignment"("mittwaldCustomerId");

-- CreateIndex
CREATE UNIQUE INDEX "HetznerResourceAssignment_extensionInstanceId_resourceType__key" ON "HetznerResourceAssignment"("extensionInstanceId", "resourceType", "resourceId");

-- CreateIndex
CREATE INDEX "HetznerResourceNote_extensionInstanceId_resourceType_resour_idx" ON "HetznerResourceNote"("extensionInstanceId", "resourceType", "resourceId");

-- CreateIndex
CREATE UNIQUE INDEX "HetznerResourceNote_extensionInstanceId_resourceType_resour_key" ON "HetznerResourceNote"("extensionInstanceId", "resourceType", "resourceId");

-- AddForeignKey
ALTER TABLE "HetznerApiToken" ADD CONSTRAINT "HetznerApiToken_extensionInstanceId_fkey" FOREIGN KEY ("extensionInstanceId") REFERENCES "ExtensionInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HetznerResourceAssignment" ADD CONSTRAINT "HetznerResourceAssignment_extensionInstanceId_fkey" FOREIGN KEY ("extensionInstanceId") REFERENCES "ExtensionInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HetznerResourceNote" ADD CONSTRAINT "HetznerResourceNote_extensionInstanceId_fkey" FOREIGN KEY ("extensionInstanceId") REFERENCES "ExtensionInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;
