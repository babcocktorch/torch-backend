import { PrismaClient } from "../prisma/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { env } from "../src/config/env"

const adapter = new PrismaPg({ connectionString: env.DIRECT_URL })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Seeding database...');

  // Add allowlisted admin emails
  const allowlistedEmails = [
    { email: 'admin@babcocktorch.com', name: 'Admin User' },
    { email: 'editor@babcocktorch.com', name: 'Editor User' },
  ];

  for (const admin of allowlistedEmails) {
    await prisma.admin.upsert({
      where: { email: admin.email },
      update: {},
      create: {
        email: admin.email,
        name: admin.name,
        passwordHash: null, // Will be set on first login
      },
    });
    console.log(`✅ Added admin: ${admin.email}`);
  }

  console.log('✨ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });