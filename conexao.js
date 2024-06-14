import { createClient } from "@supabase/supabase-js"


const link = "https://lfovvnsiprvmiqaplfms.supabase.co"
const chave = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxmb3Z2bnNpcHJ2bWlxYXBsZm1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMTYxNzQsImV4cCI6MjAzMzg5MjE3NH0.oy4gDuS8M1DzRZ16Blp08dcTN6rrO0t3Ilt8pbXyXF4"

export const supabase = createClient(link,chave)