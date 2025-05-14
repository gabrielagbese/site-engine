export const useCdn = false;
export const studioUrl = "/studio";

export const dataset = assertValue(
    process.env.SANITY_STUDIO__DATASET,
    "Missing environment variable: SANITY_STUDIO__DATASET"
);

export const projectId = assertValue(
    process.env.SANITY_STUDIO__PROJECT_ID,
    "Missing environment variable: SANITY_STUDIO__PROJECT_ID"
);

export const apiVersion =
    process.env.SANITY_STUDIO__API_VERSION || "2024-04-16";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
