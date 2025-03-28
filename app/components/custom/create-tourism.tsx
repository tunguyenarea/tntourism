'use client';

import { createTourism, State } from '@/app/lib/actions';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-500
        hover:to-fuchsia-500 hover:text-white" type="submit" disabled={pending}>
      {pending ? "Confirming..." : "Confirm"}
    </button>
  );
}

export default function CreateTourism({ author_id }: { author_id: string }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createTourism, initialState);

  return (
  <>

  <section className="m-8">
    <form action={formAction}>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Title</label>
        <input name="title" placeholder="Title..." className="rounded-lg w-full border-2 p-2" required></input>
      </div>
      <div>
        <input name="author_id" type="hidden" defaultValue={`${author_id}`}></input>
        <input name="name" type="hidden" defaultValue=""></input>
        <input name="published" type="hidden" defaultValue=""></input>
        <input name="top_img" type="hidden" defaultValue=""></input>
        <input name="mid_img" type="hidden" defaultValue=""></input>
        <input name="bottom_img" type="hidden" defaultValue=""></input>
      </div>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Top Content</label>
        <textarea name="top_content" placeholder="Content..." className="rounded-lg w-full h-64 md:h-96 border-2 p-2" required></textarea>
      </div>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Mid Content</label>
        <textarea name="mid_content" placeholder="Content..." className="rounded-lg w-full h-64 md:h-96 border-2 p-2" required></textarea>
      </div>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Bottom Content</label>
        <textarea name="bottom_content" placeholder="Content..." className="rounded-lg w-full h-64 md:h-96 border-2 p-2" required></textarea>
      </div>
      <div className="grid gap-6 md:flex md:justify-between my-6 md:my-12">
        <Link href="/dashboard">
          <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-500
            hover:to-fuchsia-500 hover:text-white">Cancel</button>
        </Link>
        <Submit />
      </div>
    </form>
  </section>

  </>
  );
}
