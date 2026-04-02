// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Seed admin user
  const hashedPassword = await bcrypt.hash('admin123!', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@vitamd.com' },
    update: {},
    create: {
      email: 'admin@vitamd.com',
      password: hashedPassword,
      name: 'Dr. Sarah Chen',
      role: 'ADMIN',
    },
  });

  // Seed sample posts
  await prisma.post.createMany({
    data: [
      {
        title: 'The Science of Longevity: What the Research Really Says',
        slug: 'science-of-longevity',
        excerpt: 'A deep dive into the latest research on extending healthspan, not just lifespan.',
        content: `# The Science of Longevity\n\nLongevity science has advanced dramatically in the past decade. New research reveals that aging is not just a passive process — it is actively driven by specific biological pathways that we can now target with precision.\n\n## The Hallmarks of Aging\n\nScientists have identified nine key hallmarks of aging, from genomic instability to cellular senescence. Understanding these pathways gives us a roadmap for intervention...\n\n## What Actually Works\n\nCaloric restriction, NAD+ precursors, rapamycin analogs, and regular high-intensity interval training all show promising results in both animal models and human studies.`,
        category: 'Longevity',
        tags: ['longevity', 'science', 'aging', 'health'],
        published: true,
        featured: true,
        readingTime: 8,
        authorId: admin.id,
      },
      {
        title: 'GLP-1 Medications: A Complete Guide for Patients',
        slug: 'glp1-complete-guide',
        excerpt: 'Everything you need to know about GLP-1 receptor agonists, from mechanism to microdosing.',
        content: `# GLP-1 Medications: Complete Guide\n\nGLP-1 receptor agonists have revolutionized metabolic medicine. Originally developed for type 2 diabetes, these medications have demonstrated remarkable efficacy for weight management and metabolic health.\n\n## How GLP-1 Works\n\nGlucagon-like peptide-1 (GLP-1) is a hormone naturally produced in the gut that signals satiety to the brain, slows gastric emptying, and modulates insulin secretion...\n\n## Microdosing Protocols\n\nFor patients seeking metabolic benefits with minimal side effects, microdosing protocols have shown promising results.`,
        category: 'Weight Loss',
        tags: ['glp1', 'weight-loss', 'medication', 'guide'],
        published: true,
        featured: false,
        readingTime: 12,
        authorId: admin.id,
      },
      {
        title: 'NAD+ and Cellular Energy: The Longevity Connection',
        slug: 'nad-cellular-energy-longevity',
        excerpt: 'How NAD+ levels decline with age and what you can do to restore them.',
        content: `# NAD+ and Cellular Energy\n\nNicotinamide adenine dinucleotide (NAD+) is perhaps the most critical coenzyme in human metabolism. Its decline with age is one of the primary drivers of metabolic dysfunction and aging...\n\n## Restoring NAD+ Levels\n\nNMN and NR supplementation have both shown efficacy in raising NAD+ levels in clinical trials. The optimal approach depends on individual biology and goals.`,
        category: 'Longevity',
        tags: ['nad+', 'nmn', 'cellular-health', 'energy'],
        published: true,
        featured: false,
        readingTime: 6,
        authorId: admin.id,
      },
    ],
    skipDuplicates: true,
  });

  // Seed sample products
  await prisma.product.createMany({
    data: [
      {
        name: 'Longevity Protocol',
        slug: 'longevity-protocol',
        description: 'Our comprehensive anti-aging program combining NAD+ precursors, senolytics, and personalized lifestyle optimization.',
        details: 'Monthly physician consultation, custom compound formulation, ongoing biomarker tracking, and 24/7 care team access.',
        price: 299,
        category: 'Longevity',
        badge: 'Most Popular',
        featured: true,
        imageUrl: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600',
      },
      {
        name: 'Weight Optimization',
        slug: 'weight-optimization',
        description: 'Medical weight management powered by GLP-1 therapies, metabolic testing, and behavior coaching.',
        details: 'Includes GLP-1 prescription, metabolic panel, monthly check-ins, and nutrition guidance from our care team.',
        price: 199,
        category: 'Weight Loss',
        badge: 'New',
        featured: true,
        imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600',
      },
      {
        name: 'Microdose Therapy',
        slug: 'microdose-therapy',
        description: 'Precision microdosing protocols for cognitive enhancement, mood balance, and neuroplasticity.',
        details: 'Evidence-based microdosing with physician oversight, protocol customization, and monthly follow-ups.',
        price: 149,
        category: 'Microdose',
        badge: null,
        featured: true,
        imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600',
      },
      {
        name: 'Hormone Optimization',
        slug: 'hormone-optimization',
        description: 'Comprehensive hormone testing and replacement therapy for vitality, energy, and sexual health.',
        details: 'Complete hormone panel, physician-prescribed HRT, quarterly testing, and lifestyle optimization.',
        price: 249,
        category: 'Sexual Health',
        badge: null,
        featured: false,
        imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600',
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Database seeded successfully');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
