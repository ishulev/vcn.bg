import homeHtml from './home.html';
import homeScss from './home.scss';
import projectsObject from './projects';

let homeObject, rendered, initialHTML, projectElements, initialX, direction;
let currentActiveElementIndex = 0;
const touchMoveClass = 'project--touch-move';
const projectActiveClass = 'project--displayed';
const projectHiddenLeft = 'project--hidden-to-left';
const projectHiddenRight = 'project--hidden-to-right';
const forwardString = 'forward';
const backwardsString = 'backwards';

function renderMustache(initialHtml, contentToRender, template) {
    Mustache.parse(initialHTML);   // optional, speeds up future uses
    rendered = Mustache.render(initialHTML, contentToRender);
    template.innerHTML = rendered;
}

function removeHiddenClasses(itemList) {
    itemList[currentActiveElementIndex].classList.remove(projectHiddenLeft, projectHiddenRight);
}

function addActiveClass(itemList) {
    removeHiddenClasses(itemList);
    itemList[currentActiveElementIndex].classList.add(projectActiveClass);
}

function hidePreviousActiveElement(itemList, currentActiveElementIndex, direction) {
    clearActiveClass(itemList, projectActiveClass);
    if (direction === forwardString) {
        itemList[currentActiveElementIndex].classList.add(projectHiddenRight);
    }
    else {
        itemList[currentActiveElementIndex].classList.add(projectHiddenLeft);
    }
}

function changeActiveElement(itemList, direction) {
    let projectItemsLength = itemList.length;
    if (direction === backwardsString) {
        if (currentActiveElementIndex === 0) {
            currentActiveElementIndex = projectItemsLength - 1;
        }
        else {
            currentActiveElementIndex--;
        }
    }
    else if (direction === forwardString) {
        if (currentActiveElementIndex === projectItemsLength - 1) {
            currentActiveElementIndex = 0;
        }
        else {
            currentActiveElementIndex++;
        }
    }
    addActiveClass(itemList);
}

function clearActiveClass(itemList, classToRemove) {
    for (const item of itemList) {
        item.classList.remove(classToRemove);
    }
}

function handleStart(ev) {
    ev.currentTarget.classList.add(touchMoveClass);
    initialX = ev.changedTouches[0].pageX;
}

function handleMove(ev) {
    const pixelsMoved = ev.changedTouches[0].pageX - initialX;
    ev.currentTarget.style['margin-left'] = pixelsMoved + 'px';
    direction = pixelsMoved > 0 ? forwardString : backwardsString;
}

function handleEnd(ev) {
    const element = ev.currentTarget;
    element.classList.remove(touchMoveClass);
    element.style['margin-left'] = null;
    // Swiped to left
    if (element.clientWidth / 2 < (initialX - ev.changedTouches[0].pageX)) {
        if (currentActiveElementIndex === projectElements.length) {
            return;
        }
        changeActive();
    }
    // Swiped to right
    else if (element.clientWidth / 2 < (ev.changedTouches[0].pageX - initialX)) {
        if (currentActiveElementIndex === 0) {
            return;
        }
        changeActive();
    }
}

function changeActive() {
    hidePreviousActiveElement(projectElements, currentActiveElementIndex, direction);
    changeActiveElement(projectElements, direction)
}

document.addEventListener('DOMContentLoaded', function () {
    homeObject = document.querySelector('.projects');
    initialHTML = homeObject.innerHTML;
    renderMustache(initialHTML, { projects: projectsObject[language] }, homeObject);
    projectElements = document.getElementsByClassName('project');
    projectElements[0].classList.add(projectActiveClass);
    projectElements[0].classList.remove(projectHiddenRight);
    const projectNavButtons = document.getElementsByClassName('project-navigation')[0].children;
    for (const projectButton of projectNavButtons) {
        direction = projectButton.getAttribute('data-direction');
        projectButton.addEventListener('click', function () {
            changeActive();
        });
    }
    for (const project of projectElements) {
        project.addEventListener('touchstart', handleStart, false);
        project.addEventListener('touchend', handleEnd, false);
        project.addEventListener('touchcancel', handleEnd, false);
        project.addEventListener('touchmove', handleMove, false);
    }
});

document.addEventListener('changeLang', function () {
    renderMustache(initialHTML, { projects: projectsObject[language] }, homeObject)
    addActiveClass(projectElements);
});

module.exports = {
    homeHtml
};