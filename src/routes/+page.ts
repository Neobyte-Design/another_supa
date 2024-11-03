import { supabase } from "$lib/supabase";

import type { PageLoad } from "./$types";
export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    return {  
    	posts: [],
    };
  }

  return {
	posts: data
  };
};
