// we use this cache to prevent re-rendering of the same text-nodes
let fragmentCache: DocumentFragment | null = null;

export const generateTextNodes = (): DocumentFragment => {
    if (fragmentCache) {
        return fragmentCache;
    }

    const comments = ["Nice Shot! 🥰", "Hott 🔥", "It's Amazing", "Clean design", "Great work", "Well done", "Perfect", "It's cool", "Looks cool", "Awesome", "Fantastic", "I love it", "Superb ", "So cute"];

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < comments.length; i++) {
        const node = document.createElement("p");
        node.innerHTML = comments[i];
        node.classList.add("commentor_wrapper__cm");
        fragment.appendChild(node);
    }
    fragmentCache = fragment;
    return fragment;
};

export const insertCommentContainer = (): HTMLDivElement => {
    const input = document.querySelector(".shot-comments-post");
    // we use this wrapper to hold text nodes and show comments on the page
    const wrapper = document.createElement("div");
    wrapper.classList.add("commentor_wrapper");

    // insert container before dribbble comment input
    input.parentNode.insertBefore(wrapper, input.nextSibling);

    return wrapper
}

export const injectComments = (): void => {
    const wrapper = insertCommentContainer();
    const textFragment = generateTextNodes();
    wrapper.appendChild(textFragment.cloneNode(true));
};
