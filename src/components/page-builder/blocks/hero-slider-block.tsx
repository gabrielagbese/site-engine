"use client";
import { PageBuilderType } from "@/types";
import Container from "@/components/global/container";
import Heading from "@/components/shared/heading";
import ButtonRenderer from "@/components/shared/button-renderer";
import Image from "next/image";
import { useState } from "react";

export type HeroSliderBlockProps = PageBuilderType<"heroSliderBlock">;

export default function HeroSliderBlock(props: HeroSliderBlockProps) {
    const { heading, content, images, buttons, anchorId } = props;
    const [current, setCurrent] = useState(0);

    return (
        <section
            {...(anchorId ? { id: anchorId } : {})}
            className="py-12 bg-white border-b border-gray-200"
        >
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 flex flex-col gap-4">
                        {heading && <Heading>{heading}</Heading>}
                        {content && <div className="prose">{content}</div>}
                        {buttons && <ButtonRenderer buttons={buttons} />}
                    </div>
                    <div className="md:w-1/2 w-full">
                        {images && images.length > 0 && (
                            <div className="relative w-full aspect-[16/9]">
                                <Image
                                    src={images[current].asset.url}
                                    alt={images[current].alt || ""}
                                    fill
                                    className="object-cover rounded-xl"
                                    priority
                                />
                                <div className="absolute bottom-2 right-2 flex gap-2">
                                    {images.map((img, idx) => (
                                        <button
                                            key={img._key}
                                            className={`w-3 h-3 rounded-full ${idx === current ? "bg-blue-600" : "bg-gray-300"}`}
                                            onClick={() => setCurrent(idx)}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
