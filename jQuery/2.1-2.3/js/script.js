$(document).ready(function () {
    // const section = $('#about');
    // console.log(section);

    // const listItem = $('.list-item');

    // console.log(listItem);


    // const paragraphs = $('p');

    // console.log(paragraphs);

    // const secondItem = $('.list-item:nth-of-type(2)');

    // console.log(secondItem);


    // const links = $('a[title="See more"');

    // const headingInSection = $('section h2');

    // console.log(headingInSection);

    // console.log(links);


    // const documentObj = $(document);

    // console.log(documentObj)

    // const fifthItem = $('.list-item').eq(4);
    // console.log(fifthItem)

    // const firstItem = $('.list-item').first();

    // console.log(firstItem);

    // const lastItem = $('.list-item').last();

    // console.log(lastItem)


    // const paragraphsNotDescription = $('p').not('.description');
    //  console.log(paragraphsNotDescription);

    //  const linksInSection = $('section').find('a');

    //  console.log(linksInSection);


    const linkParants = $('a').parent();

    console.log(linkParants);

    const sectionChildren =$('section').children();

    console.log(sectionChildren);

    const elementAfterDescriotion =$('.description').next();

    console.log(elementAfterDescriotion);

    const elementBeforeDescriotion =$('.description').prev();

    console.log(elementBeforeDescriotion);
}) 