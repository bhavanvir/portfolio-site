import RenderResume from "@/components/render-resume";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Resume",
  description: "Look at my resume.",
};

export default function Resume() {
  return <RenderResume />;
}
