<script setup lang="ts">
const technicalTeam = [
  { name: 'Angelo Bernabei', role: 'Product Manager' },
  { name: 'Davide Vernassa', role: 'Technical Manager' },
  { name: 'Massimo Sebastiani', role: '' },
  { name: 'Emanuele Cerilli', role: '' },
  { name: 'Darko Bulatovic', role: '' },
]

const consultantTeam = [
  { name: 'Stefano Modroni', role: 'Lead Consultant' },
  { name: 'Irene Fassi' },
  { name: 'Antonella Giachino' },
  { name: 'Giuseppe Mansueto' },
  { name: 'Priscilla Menziani' },
  { name: 'Brian Trajani' },
  { name: 'Alessandra Ricardi di Nietro' },
  { name: 'Ivana Canu' },
  { name: 'Adele Maria Esposito' },
  { name: 'Filippo Casetta' },
  { name: 'Federica Cantarini' },
]

const salesSpecialist = [{ name: 'Stefano Vitelli' }]

const solutionSpecialist = [{ name: 'Stefano Scamuzzo', role: '' }]

const contributors = [
  { name: 'John Doe', company: 'TechCorp', country: 'USA' },
  { name: 'Jane Smith', company: 'Innovate Ltd', country: 'UK' },
  { name: 'Carlos Pérez', company: '', country: 'Spain' },
  { name: 'Yuki Tanaka', company: 'FutureWorks', country: 'Japan' },
]
</script>

<template>
  <div class="space-y-16">
    <!-- Hero Section -->
    <UPageSection title="About Us" description="Who we are and what we do">
      <p class="text-lg text-gray-600">
        <strong>KNOWAGE Labs</strong> develops KNOWAGE sofware together with the
        open-source community. In addition, they manage the suite and the
        related services, including support, training.
      </p>
      <p class="text-lg text-gray-600">
        These professionals belong to Engineering Group. The offices are in
        <strong>Italy</strong> (Bologna, Milan, Rome, Turin) and
        <strong>Republic of Serbia</strong> (Belgrade).
      </p>
    </UPageSection>

    <!-- Team Section -->
    <UPageSection title="Our Team">
      <div class="grid md:grid-cols-2 gap-8">
        <UCard>
          <h3 class="font-semibold text-xl mb-4">Technical Team</h3>
          <ul class="space-y-2">
            <li v-for="member in technicalTeam" :key="member.name">
              <strong>{{ member.name }}</strong
              >{{ member.role ? ` — ${member.role}` : '' }}
            </li>
          </ul>
        </UCard>

        <UCard>
          <h3 class="font-semibold text-xl mb-4">Consultant Team</h3>
          <ul class="space-y-2">
            <li v-for="member in consultantTeam" :key="member.name">
              <strong>{{ member.name }}</strong
              >{{ member.role ? ` — ${member.role}` : '' }}
            </li>
          </ul>
        </UCard>

        <UCard>
          <h3 class="font-semibold text-xl mb-4">Sales Specialist</h3>
          <ul class="space-y-2">
            <li v-for="member in salesSpecialist" :key="member.name">
              <strong>{{ member.name }}</strong
              >{{ member.role ? ` — ${member.role}` : '' }}
            </li>
          </ul>
        </UCard>

        <UCard>
          <h3 class="font-semibold text-xl mb-4">Solution Specialist</h3>
          <ul class="space-y-2">
            <li v-for="member in solutionSpecialist" :key="member.name">
              <strong>{{ member.name }}</strong
              >{{ member.role ? ` — ${member.role}` : '' }}
            </li>
          </ul>
        </UCard>
      </div>
    </UPageSection>

    <!-- Contributors Section -->
    <UPageSection
      title="Contributors"
      description="We are pleased to introduce some people who are contributing or have contributed to the growth of KNOWAGE in this 20 years history. Behind every name, there is a piece of knowledge, experience, talent and passion."
    >
      <div class="max-h-64 overflow-y-auto border rounded-md">
        <table class="w-full text-sm">
          <tbody>
            <tr v-for="c in contributors" :key="c.name" class="border-b">
              <td class="px-3 py-2 font-medium">{{ c.name }}</td>
              <td class="px-3 py-2 text-gray-500">{{ c.company }}</td>
              <td class="px-3 py-2">{{ c.country }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </UPageSection>
  </div>
</template>
