import { supabase } from "../../services/supabaseClient";

const getPosts = async (req, res) => {
  const { data } = await supabase
    .from("Feed")
    .select("*")
    .order("id", { ascending: false });
  console.log("data", data);
  res.status(200).json({ data: data });
};

export default getPosts;
