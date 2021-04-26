// =================================================
// Tutorial: How does Tagged Template Literal Work?
// =================================================

// template generator
function templater(string, ...args) {
    return function(data) {
        // make a copy of original string
        let temp = string.slice();
        // fill in placeholders
        args.forEach((key, i) => {
            temp[i] += data[key];
        });
        return temp.join("");
    };
}

// sample template for personal info
const infoTemplate = templater`
    <article>
        <h3>${'name'}</h3>
        <p>
            <b>${'position'} @ ${'institute'}</b> <br>
            Email address: ${'email'}
        </p>
    </article>
`;

const info = {
    name: "Qinzi",
    position: "Senior Student",
    institute: "Boston College",
    email: "zhang dot qinzi at bc dot edu"
};

const template1 = infoTemplate(info);
document.getElementById("section-about").innerHTML = template1;


/*
Note: if such a tagged template literal is passed into a function,
then the first parameter will be converted into a list
such that each element is the "segment" between two ${}'s
*/

/*
Example:
Look at the following function, it will print:
["<article>...<h3>, </h3>...<b>, @, </b>...address:, </p>...</article>"]
Then you can plug in placeholders behind each element and join it!
*/
function testTaggedTemplateLiteral(string) {
    console.log(string);
    console.log(string.join(""));
}

if (true) {
    testTaggedTemplateLiteral`
    <article>
        <h3>${'name'}</h3>
        <p>
            <b>${'position'} @ ${'institute'}</b>
            Email address: ${'email'}
        </p>
    </article>
    `;
}