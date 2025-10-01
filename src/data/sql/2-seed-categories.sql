CREATE POLICY "Enable read access for all users" ON "public"."categories"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."city_categories"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."city_cities"
AS PERMISSIVE FOR SELECT
TO public
USING (true);