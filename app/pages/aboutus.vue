<script setup lang="ts">
const technicalTeam = [
  { name: 'Angelo Bernabei', role: 'Product Manager' },
  { name: 'Davide Vernassa', role: 'Technical Manager' },
  { name: 'Massimo Sebastiani', role: '' },
  { name: 'Emanuele Cerilli', role: '' },
  { name: 'Alessandro Taurelli', role: '' },
  { name: 'Darko Bulatovic', role: '' },
  { name: 'Bojan Sovtic', role: '' }
]

const consultantTeam = [
  { name: 'Stefano Modroni', role: 'Lead Consultant' },
  { name: 'Irene Fassi', role: '' },
  { name: 'Antonella Giacchino', role: '' },
  { name: 'Giuseppe Mansueto', role: '' },
  { name: 'Priscilla Menziani', role: '' },
  { name: 'Brian Trjani', role: '' },
  { name: 'Alessandra Riccardi Di Nietro', role: '' },
  { name: 'Ivana Canu', role: '' },
  { name: 'Adele Maria Esposito', role: '' },
  { name: 'Filippo Casetta', role: '' },
  { name: 'Federica Cantarini', role: '' }
]

const salesSpecialist = [{ name: 'Stefano Vitelli', role: '' }]

const solutionSpecialist = [{ name: 'Stefano Scamuzzo', role: '' }]

const individualContributors = [
  { name: 'Grazia Cazzin', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Marco Libanori', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Alberto Nale', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Davide Zerbetto', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Matteo Massarotto', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Elena Marchisa', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Alberto Ghedin', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Vojislav Stanojevic', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Marco Cortella', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Marco Battaglia', company: 'Quantyca', country: 'Italy', note: 'Development of GeoReport engine' },
  { name: 'Alessandra Cauli', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Charly Clairmont', company: 'Altic', country: 'France', note: '' },
  { name: 'Maxime Chambreuil', company: 'Savoir-faire Linux', country: 'France', note: '' },
  { name: 'Chiara Chiarelli', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Alessandro Daniele', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Daniele Davì', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Stefano Donin', company: '', country: 'Italy', note: '' },
  { name: 'Giorgio Federici', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Monica Franceschini', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Luca Fiscato', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Gioia Andrea', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Gaurav Jauhri', company: '', country: 'India', note: 'Integration of AJAX Qooxdoo framework' },
  { name: 'Lazar Kostic', company: '', country: 'Serbia', note: '' },
  { name: 'Dario La Neve', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Susana Lopez Barreras', company: '', country: 'Spain', note: '' },
  { name: 'Fabrizio Lovato', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Salvatore Lupo', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Nunzia Marotta', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Benedetto Milazzo', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Alessandro Pegoraro', company: 'Engineering Group', country: 'Italy', note: 'Improvements on security and password encryption module' },
  { name: 'Mark Penningroth', company: '', country: 'USA', note: '' },
  { name: 'Amit Rana', company: '', country: 'India', note: 'Code refactoring and integration of AJAX Qooxdoo framework' },
  { name: 'Monia Spinelli', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Alessandro Sulis', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Francesco Timperi Tiberi', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Daniela Tura', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Giovanni Luca Ulivo', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Pavel Vassiliev', company: '', country: 'USA', note: '' },
  { name: 'Sven Werlen', company: 'Savoir Faire Linux', country: 'Canada', note: 'Integration of Liferay 5.2' },
  { name: 'Giordano Valentini', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Alessio Conese', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Arsenije Dujic', company: 'MHT', country: 'Serbia', note: '' },
  { name: 'Danilo Ristovski', company: 'MHT', country: 'Serbia', note: '' },
  { name: 'Letizia Pernigotti', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Ana Tomic', company: 'MHT', country: 'Serbia', note: '' },
  { name: 'Alessandro Piovani', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Jessica Luis Lopez', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Simona Di Mase', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Emmanuele Bello', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Stefan Petrovic', company: 'MHT', country: 'Serbia', note: '' },
  { name: 'Nikola Simovic', company: 'MHT', country: 'Serbia', note: '' },
  { name: 'Lucas Carmo', company: '', country: '', note: 'Security Patch' },
  { name: 'Edward Toledano', company: '', country: '', note: 'Security Patch' },
  { name: 'Luca Ottoni', company: '', country: '', note: 'Security Patch' },
  { name: 'Marko Kostic', company: 'MHT', country: 'Serbia', note: '' },
  { name: 'Francesco Lucchi', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Predrag Josipovic', company: 'MHT', country: 'Serbia', note: '' },
  { name: 'Milos Sesic', company: 'MHT', country: 'Serbia', note: '' },
  { name: 'Emanuele Ristoratore', company: 'Engineering Group', country: 'Italy', note: '' },
  { name: 'Andrijana Predojevic', company: 'MHT', country: 'Serbia', note: '' },
  { name: 'Haaris B.', company: '', country: '', note: 'Security Patch' },
  { name: 'Muhammad Shahzaib', company: '', country: 'Pakistan', note: 'Security Patch' },
  { name: 'Felipe Urrego', company: '', country: 'Colombia', note: 'Translations' },
  { name: 'Isabella Iennaco', company: 'Engineering Group', country: 'Italy', note: '' }
]

const companyContributors = [
  { name: 'ASL 3 Torino', type: 'Local Healthcare', country: 'Italy' },
  { name: 'Genoa Municipality', type: 'Public Administration', country: 'Italy' },
  { name: 'Province of Venice', type: 'Public Administration', country: 'Italy' },
  { name: 'Quantyca', type: '', country: 'Italy' },
  { name: 'Savoir-Faire Linux', type: '', country: 'Canada' }
]
</script>

<template>
  <div>
    <UPageHero
      title="KNOWAGE Labs"
      description="Developing KNOWAGE software together with the open source community"
    />

    <UPageSection>
      <div class="max-w-3xl mx-auto space-y-6">
        <p class="text-lg text-gray-600 dark:text-gray-300">
          <strong>KNOWAGE Labs</strong> develop KNOWAGE software together with the open source community. In addition, they manage the suite and the related services listed in the Professional Services page.
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          These professionals belong to <strong>Engineering Group</strong>. The offices in <strong>Italy</strong> (Bologna, Milan, Rome, Turin) and <strong>Republic of Serbia</strong> (Belgrade) coordinate a network of international affiliates that serve as local contact points for customers and integrators.
        </p>
      </div>
    </UPageSection>

    <!-- Team Section -->
    <UPageSection title="Our Team">
      <div class="grid md:grid-cols-2 gap-8">
        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon
                name="i-lucide-code"
                class="w-6 h-6 text-primary-500"
              />
              <h3 class="font-semibold text-xl">
                Technical Team
              </h3>
            </div>
          </template>
          <ul class="space-y-2">
            <li
              v-for="member in technicalTeam"
              :key="member.name"
              class="flex items-center gap-2"
            >
              <UIcon
                name="i-lucide-user"
                class="w-4 h-4 text-gray-400"
              />
              <span>
                <strong>{{ member.name }}</strong>
                <span
                  v-if="member.role"
                  class="text-primary-500"
                > — {{ member.role }}</span>
              </span>
            </li>
          </ul>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon
                name="i-lucide-briefcase"
                class="w-6 h-6 text-primary-500"
              />
              <h3 class="font-semibold text-xl">
                Consultant Team
              </h3>
            </div>
          </template>
          <ul class="space-y-2">
            <li
              v-for="member in consultantTeam"
              :key="member.name"
              class="flex items-center gap-2"
            >
              <UIcon
                name="i-lucide-user"
                class="w-4 h-4 text-gray-400"
              />
              <span>
                <strong>{{ member.name }}</strong>
                <span
                  v-if="member.role"
                  class="text-primary-500"
                > — {{ member.role }}</span>
              </span>
            </li>
          </ul>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon
                name="i-lucide-handshake"
                class="w-6 h-6 text-primary-500"
              />
              <h3 class="font-semibold text-xl">
                Sales Specialist
              </h3>
            </div>
          </template>
          <ul class="space-y-2">
            <li
              v-for="member in salesSpecialist"
              :key="member.name"
              class="flex items-center gap-2"
            >
              <UIcon
                name="i-lucide-user"
                class="w-4 h-4 text-gray-400"
              />
              <strong>{{ member.name }}</strong>
            </li>
          </ul>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon
                name="i-lucide-lightbulb"
                class="w-6 h-6 text-primary-500"
              />
              <h3 class="font-semibold text-xl">
                Solution Specialist
              </h3>
            </div>
          </template>
          <ul class="space-y-2">
            <li
              v-for="member in solutionSpecialist"
              :key="member.name"
              class="flex items-center gap-2"
            >
              <UIcon
                name="i-lucide-user"
                class="w-4 h-4 text-gray-400"
              />
              <strong>{{ member.name }}</strong>
            </li>
          </ul>
        </UCard>
      </div>
    </UPageSection>

    <!-- Contributors Section -->
    <UPageSection
      title="List of Contributors"
      description="We are pleased to introduce some people who are contributing or have contributed to the growth of KNOWAGE in this 20-years history. Behind every name, there is a person with his/her history, made of knowledge, experience, talent and passion."
    >
      <div class="space-y-8">
        <!-- Individual Contributors -->
        <div>
          <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <UIcon
              name="i-lucide-users"
              class="w-5 h-5 text-primary-500"
            />
            Individuals
          </h3>
          <div class="max-h-96 overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-lg">
            <table class="w-full text-sm">
              <thead class="bg-gray-50 dark:bg-gray-800 sticky top-0">
                <tr>
                  <th class="px-4 py-3 text-left font-medium">
                    Name
                  </th>
                  <th class="px-4 py-3 text-left font-medium">
                    Company
                  </th>
                  <th class="px-4 py-3 text-left font-medium">
                    Country
                  </th>
                  <th class="px-4 py-3 text-left font-medium">
                    Contribution
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="c in individualContributors"
                  :key="c.name"
                  class="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <td class="px-4 py-2 font-medium">
                    {{ c.name }}
                  </td>
                  <td class="px-4 py-2 text-gray-500">
                    {{ c.company || '-' }}
                  </td>
                  <td class="px-4 py-2">
                    {{ c.country || '-' }}
                  </td>
                  <td class="px-4 py-2 text-gray-500 text-xs">
                    {{ c.note }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Company Contributors -->
        <div>
          <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <UIcon
              name="i-lucide-building-2"
              class="w-5 h-5 text-primary-500"
            />
            Companies and Organizations
          </h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <UCard
              v-for="c in companyContributors"
              :key="c.name"
              class="text-center"
            >
              <p class="font-semibold">
                {{ c.name }}
              </p>
              <p
                v-if="c.type"
                class="text-sm text-gray-500"
              >
                {{ c.type }}
              </p>
              <p class="text-sm text-gray-400">
                {{ c.country }}
              </p>
            </UCard>
          </div>
        </div>
      </div>
    </UPageSection>
  </div>
</template>
