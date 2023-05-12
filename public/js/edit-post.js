const post_id = window.location.href.split("/").pop();
console.log(post_id);

const editButtonHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const contents = document.querySelector('input[name="post-content"]').value.trim();

  console.log(post_id);
  await fetch(`/api/post/${post_id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      contents,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#saveBtn")
  .addEventListener("click", editButtonHandler);