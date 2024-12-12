"use client";

import { use } from "react";

export default function Page({ params }) {
  const { slug } = use(params);
}
