import { defineCollection, z } from "astro:content";

const publications = defineCollection({
  type: "data",
  schema: z.object({
    items: z.array(
      z.object({
        id: z.string().min(1),
        year: z.number().int(),
        title: z.string().min(1),
        authors: z.string().min(1),
        venue: z.string().optional(),
        links: z
          .array(
            z.object({
              label: z.string().min(1),
              url: z.string().url(),
            })
          )
          .optional(),
        tags: z.array(z.string()).optional(),
        note: z.string().optional(),
        selected: z.boolean().optional(),
      })
    ),
  }),
});

const teaching = defineCollection({
  type: "data",
  schema: z.object({
    terms: z.array(
      z.object({
        term: z.string().min(1), // e.g. "Fall 2025"
        items: z.array(
          z.object({
            course: z.string().min(1),
            title: z.string().optional(),
            institution: z.string().optional(),
            role: z.string().optional(),
            url: z.string().url().optional(),
            notes: z.array(z.string()).optional(),
          })
        ),
      })
    ),
  }),
});

const students = defineCollection({
  type: "data",
  schema: z.object({
    current: z
      .array(
        z.object({
          name: z.string().min(1),
          role: z.string().optional(),
          topic: z.string().optional(),
          institution: z.string().optional(),
          links: z
            .array(
              z.object({
                label: z.string().min(1),
                url: z.string().url(),
              })
            )
            .optional(),
        })
      )
      .optional(),
    alumni: z
      .array(
        z.object({
          name: z.string().min(1),
          role: z.string().optional(),
          next: z.string().optional(),
          institution: z.string().optional(),
          links: z
            .array(
              z.object({
                label: z.string().min(1),
                url: z.string().url(),
              })
            )
            .optional(),
        })
      )
      .optional(),
    prospectiveNote: z.string().optional(),
  }),
});

const awards = defineCollection({
  type: "data",
  schema: z.object({
    items: z.array(
      z.object({
        year: z.number().int().optional(),
        title: z.string().min(1),
        org: z.string().optional(),
        note: z.string().optional(),
        url: z.string().url().optional(),
      })
    ),
  }),
});

const pages = defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().min(1),
      description: z.string().optional(),
    }),
  });  

export const collections = {
  publications,
  teaching,
  students,
  awards,
  pages,
};
