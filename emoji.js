function changeMood(mood) {
    const circle = document.querySelector('.circle');
    circle.innerHTML = "";  // Clear any existing content

    const img = document.createElement("img");

    if (mood === "😊") {
        img.src = "https://user-images.githubusercontent.com/74038190/216120986-f2752ca9-fe82-4aa3-befe-0a58db010d85.png"; 
        document.body.style.backgroundColor = "#e0f7fa";
    } else if (mood === "😡") {
        img.src = "https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png"; 
        document.body.style.backgroundColor = "#ef9a9a";
    } else if (mood === "😎") {
        img.src = "https://user-images.githubusercontent.com/74038190/212744289-c46f1717-bfc9-4724-8ef3-4b08e3583110.gif";
        document.body.style.backgroundColor = "#f3e5f5";
    } else if (mood === "🤭") {
        img.src = "https://user-images.githubusercontent.com/74038190/216124356-9c152f5b-554d-400c-a2f3-84f0f0b9a627.png";
        document.body.style.backgroundColor = "#fffde7";
    }

    // Style the image
    img.style.height = "100%";
    img.style.width = "100%";
    img.style.objectFit = "cover";

    // Append image to circle
    circle.appendChild(img);

    // Log the mood for debugging
    console.log(mood);
}
