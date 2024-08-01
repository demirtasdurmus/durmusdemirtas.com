"use client";

export default function Sample(props: any) {
  return (
    <div className="text-black text-lg">
      {JSON.stringify(props.searchParams)}
    </div>
  );
}
