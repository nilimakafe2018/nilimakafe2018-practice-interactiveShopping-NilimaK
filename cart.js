window.addEventListener("load", () => {

    const input_item = document.getElementById("input-item");
    const add_button = document.getElementById("add-button");
    const list = document.getElementById("Shopping-list");

    function itemListCreated(text) {

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = text;
        li.appendChild(span);

        const edit_button = document.createElement("button");
        edit_button.textContent = "Edit";
        li.appendChild(edit_button);

        const remove_button = document.createElement("button");
        remove_button.textContent = "Remove";
        li.appendChild(remove_button);

        // For item remove
        remove_button.addEventListener("click", () => {
            list.removeChild(li);
        });

        // For item edit
        edit_button.addEventListener("click", () => {
            if (edit_button.textContent === "Edit") {
                const editInput = document.createElement("input");
                editInput.type = "text";
                editInput.value = span.textContent;
                li.insertBefore(editInput, span);
                li.removeChild(span);
                edit_button.textContent = "Save";
            } else {
                const newText = li.querySelector("input").value;
                span.textContent = newText;
                li.insertBefore(span, li.querySelector("input"));
                li.removeChild(li.querySelector("input"));
                edit_button.textContent = "Edit";
            }
        });

        return li;
    }

    // Added button listener
    add_button.addEventListener("click", () => {
        const text = input_item.value.trim(); 
        if (text !== "") {
            const li = itemListCreated(text);
            list.appendChild(li);
            input_item.value = "";
            input_item.focus();
        }
    });

});








