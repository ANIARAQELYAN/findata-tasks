
const comments = [
    {
        id: 1,
        text: "This is the first comment",
        parentId: null,
        replies: [
            {
                id: 2,
                text: "This is a reply to the first comment",
                parentId: 1,
                replies: [
                    {
                        id: 3,
                        text: "This is a nested reply",
                        parentId: 2,
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        text: "This is an independent comment",
        parentId: null,
        replies: []
    },

];


function generateComments(comments, level) {
    let html = "";
    comments.forEach(comment => {

        const style = `margin-left: ${level * 20}px;`;


        html += `<div class="comment" style="${style}">${comment.text}</div>`;

        if (comment.replies.length > 0) {
            html += generateComments(comment.replies, level + 1);
        }
    });
    return html;
}


const commentsContainer = document.getElementById("commentsContainer");


commentsContainer.innerHTML = generateComments(comments, 0);
