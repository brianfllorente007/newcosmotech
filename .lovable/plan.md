## Text changes

1. **src/routes/index.tsx** (Featured Work intro): replace "We have delivered projects for some of the largest government institutions…" with "We deliver secure and scalable systems for the Philippines' leading government institutions designed, developed, and successfully deployed at scale. Explore our selected implementations."

2. **src/components/WhyCosmotech.tsx** (line ~55): replace "For over three decades, we have been the trusted technology engine behind the Philippines' most critical organizations." with "For over three decades, we have been the trusted technology partner of the Philippines government and enterprise institutions delivering secure, scalable, and mission-critical systems that power essential operations nationwide."

3. **src/components/FaqSection.tsx**: replace FAQs with the new 6-question list:
   - What industries does Cosmotech serve? → updated wording
   - Are your software solutions customizable? → updated wording (scalable/adaptable)
   - Is Cosmotech ISO certified? → adds ISO/IEC 27001:2022
   - How do I request a product demo or proposal? → minor wording update
   - **NEW**: Does Cosmotech provide implementation, training, and technical support?
   - **NEW**: Where can your solutions be deployed?
   - **NEW**: How does Cosmotech help organizations with digital transformation?

## Page edits

4. **Remove "Our Clients" section** from `src/routes/index.tsx` (the `<section className="bg-bone pb-16…">` block with the `ourClients` image and "Empowering Our Clients' Success" heading). Also drop the now-unused `ourClients` import.

5. **Connect Solutions tab to /integra**: in `src/components/SuiteTabs.tsx` line 95, change the `integrahris` slug link target from `/integrahris-365` to `/integra` so the "Learn more" link on the IntegraHRIS tab routes to the existing `src/routes/integra.tsx` page.

No other files or business logic affected.