// Master key for the user who can post
const masterKey = "GOSSIPGIRL123"; // Set the master key (you can change this)

const loginButton = document.getElementById("loginButton");
const postSection = document.getElementById("postSection");
const submitPostButton = document.getElementById("submitPostButton");
const postContent = document.getElementById("postContent");
const photoUpload = document.getElementById("photoUpload");
const fileUpload = document.getElementById("fileUpload");
const urlInput = document.getElementById("urlInput");

// Show login prompt and allow access to post if the master key is entered
loginButton.addEventListener("click", () => {
    let enteredKey = prompt("Enter the Master Key to Post:");

    if (enteredKey === masterKey) {
        postSection.style.display = "block"; // Show the post form
        loginButton.style.display = "none"; // Hide the login button
    } else {
        alert("Incorrect master key. Access denied Bitch!");
    }
});

// Handle the post submission
submitPostButton.addEventListener("click", () => {
    const content = postContent.value.trim();
    const photo = photoUpload.files[0];
    const file = fileUpload.files[0];
    const url = urlInput.value.trim();

    if (content || photo || file || url) {
        let postMessage = content;
        
        // Handle photo attachment
        if (photo) {
            postMessage += `<br><img src="${URL.createObjectURL(photo)}" alt="Post Image" style="max-width: 100%; margin-top: 10px;">`;
        }

        // Handle file attachment
        if (file) {
            postMessage += `<br><a href="${URL.createObjectURL(file)}" download="${file.name}" style="margin-top: 10px;">Download ${file.name}</a>`;
        }

        // Handle URL input (link)
        if (url) {
            postMessage += `<br><a href="${url}" target="_blank" style="margin-top: 10px;">Click here for more gossip!</a>`;
        }

        // Show success message and clear the post content
        alert("Post submitted successfully!");
        postContent.value = ''; // Clear the content
        photoUpload.value = ''; // Reset the photo input
        fileUpload.value = ''; // Reset the file input
        urlInput.value = ''; // Reset the URL input

        // In a real app, you would save this post to a server, but for now we’ll display the message.
        document.getElementById("postSection").innerHTML = postMessage;
    } else {
        alert("Please enter some gossip or add attachments!");
    }
});
