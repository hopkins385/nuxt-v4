<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'

const formSchema = z.object({
  email: z.email({ error: 'Invalid email address' }),
  password: z.string().min(1, { error: 'Password is required' }),
})

const { handleSubmit, isSubmitting } = useForm({ validationSchema: toTypedSchema(formSchema) })

const serverError = ref('')
const { fetch: refreshSession } = useUserSession()

const onSubmit = handleSubmit(async (values) => {
  serverError.value = ''
  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: values,
    })
    await refreshSession()
    await navigateTo('/admin')
  } catch {
    serverError.value = 'Invalid email or password.'
  }
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-6 pb-8 pt-4"
    style="background: radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.62 0.19 277 / 0.20) 0%, transparent 65%), var(--background);">
    <div class="w-full max-w-[360px]">
      <div class="mb-6 text-center">
        <h1 class="text-[1.75rem] font-extrabold tracking-[-0.03em] leading-tight mb-1.5">Sign in</h1>
        <p class="text-sm text-muted-foreground">Admin access only.</p>
      </div>

      <Card class="border-white/[0.09] rounded-2xl overflow-visible"
        style="box-shadow: 0 0 0 1px oklch(0.62 0.19 277 / 0.12), 0 20px 56px oklch(0 0 0 / 0.55);">
        <CardContent class="px-6 py-7">
          <form class="flex flex-col gap-4" @submit="onSubmit">
            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel class="text-foreground/75">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" autocomplete="email" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="password">
              <FormItem>
                <FormLabel class="text-foreground/75">Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" autocomplete="current-password"
                    v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <p v-if="serverError" role="alert" aria-live="polite" class="text-xs text-destructive">{{ serverError }}</p>

            <Button type="submit" :disabled="isSubmitting"
              class="mt-1 w-full hover:brightness-110 hover:-translate-y-px active:translate-y-0 disabled:translate-y-0"
              style="box-shadow: 0 4px 28px oklch(0.62 0.19 277 / 0.55), 0 0 0 1px oklch(0.62 0.19 277 / 0.2);">
              {{ isSubmitting ? 'Signing in…' : 'Sign in' }}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div class="mt-5 text-center">
        <NuxtLink to="/"
          class="text-sm text-muted-foreground no-underline transition-colors hover:text-foreground inline-flex items-center gap-1.5 group">
          <span class="transition-transform group-hover:-translate-x-0.5">←</span> Back to site
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
