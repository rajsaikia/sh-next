import PostView from "../features/posts/components/PostView";

const dummyPost = {
  title: "Aenean vitae mattis elit",
  imageUrl: "/images/post-image.jpg", // Replace with a real image path
  content: (
    <>
      <p>
        Aenean vitae mattis elit. Aenean justo lacus, mollis sit amet molestie,
        aliquam id enean sit amet est tristique, fringilla sapien at, laoreet
        elit. Suspendisse tristique nibh at felis bibendum, eu maximus ex
        dignissim.
      </p>
      <p>
        Nullam cursus elit lacus. Sed purus odio, scelerisque nec mauris vitae,
        tristiquinterdum diam. Maecenas faucibus justo id finibus egestas.
        Curabitur vitae scelerisqu maecenas dapibus sapien dolor, sit amet
        vulputate velit cursus vitae. Suspendisse potentilacinia Nullam
        ullamcorper quam quis nulla ultrices, eget porta lacus tempus.
      </p>
      <blockquote className="p-4 my-4 bg-gray-100 border-l-4 border-gray-500 italic">
        <p className="mb-0">
          Pellentesque tincidunt malesuadal nunc dapibus purused dictum ide proin
          a turpis tempus, ullamcorper dui id faucibus semper quam acc erat
          convallis volutpat duis feugiat
        </p>
      </blockquote>
      <p>
        Aenean vitae mattis elit. Aenean justo lacus, mollis sit amet molestie,
        aliquam d enean sit amet est tristique, fringilla sapien at, laoreet
        elit.
      </p>
    </>
  ),
};

export default function PostPage() {
  return <PostView {...dummyPost} />;
}
