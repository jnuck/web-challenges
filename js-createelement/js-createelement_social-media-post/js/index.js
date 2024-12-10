console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

function createPost() {
  // Define variables for HTML elements
  const postContainer = document.createElement("article");
  const postContent = document.createElement("p");
  const postFooter = document.createElement("footer");
  const postUsername = document.createElement("span");
  const postButton = document.createElement("button");

  // Add classes to elements
  postContainer.classList.add("post");
  postContent.classList.add("post__content");
  postFooter.classList.add("post__footer");
  postUsername.classList.add("post__username");
  postButton.classList.add("post__button");

  // Add event listener to like button
  postButton.addEventListener("click", handleLikeButtonClick);

  // Nest elements accordingly
  postContainer.append(postContent, postFooter);
  postFooter.append(postUsername, postButton);

  // Give elements content
  postContent.textContent = "I solved the challenge!";
  postUsername.textContent = "@joshua";
  postButton.textContent = "♥ Like";

  // Append everything to the body
  document.body.append(postContainer);
}

createPost();
