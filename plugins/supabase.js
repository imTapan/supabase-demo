import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin(() => {
  const supabase = createClient(
    "https://gznluyavlqybdcvjeifx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6bmx1eWF2bHF5YmRjdmplaWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NTQxMzYsImV4cCI6MjA0NTAzMDEzNn0.ndCkIYxgbg-LqdVxKvSiPI46Y4mo87m4wVB7K85e2RI"
  );
  return {
    provide: {
      supabase: supabase,
    },
  };
});
