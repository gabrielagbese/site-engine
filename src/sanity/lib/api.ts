export const useCdn = false;
export const studioUrl = "/studio";

export const dataset = assertValue(
    process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
    "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_DATASET"
);

export const projectId = assertValue(
    process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
    "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID"
);

export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || "2024-04-16";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
