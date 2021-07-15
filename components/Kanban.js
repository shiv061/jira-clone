import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import StarIcon from '@atlaskit/icon/glyph/star';
import Button from '@atlaskit/button';
import ShareIcon from '@atlaskit/icon/glyph/share';
import MoreIcon from '@atlaskit/icon/glyph/more';
import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down';
import { useState } from 'react';
import AvatarGroup from './AvatarGroup';
import Board from './Board';
import Projects from '../data.json';
import { useAppContext } from '../context';
import { DragDropContext } from 'react-beautiful-dnd';


const Kanban = () => {
  const [white, setWhite] = useState(false);
  const [selected, setSelected] = useState(false);
  const { search, setSearch } = useAppContext();
  const [projects, setProjects] = useState(Projects)

  function handleOnDragEnd(result) {
    console.log(result)
    if (!result.destination) return;

    const items = Array.from(projects);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setProjects(items);
  }

  const BoardData = [{ id: 'TO DO', sub: '1 of 4', proj: projects.slice(9, 11) }, { id: 'In Progress', sub: '2 of 4', proj:projects.slice(0, 3) }, { id: 'Complete', sub: '3 of 4', proj:projects.slice(3, 5) },{ id: 'Released', sub: '4 of 4', proj: projects.slice(5, 9) }]

  return (
    <div className="h-[calc(100vh-68px)]">
      <div className="w-full p-4">
        <div>
          <Breadcrumbs>
            <BreadcrumbsItem href="#" text="Projects" />
            <BreadcrumbsItem href="#" text="Kanban-Board" />
          </Breadcrumbs>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center" style={{ flex: 5 }}>
            <h1 className="text-xl text-gray-900">Kanban board</h1>
          </div>
          <div className="flex items-center justify-around" style={{ flex: 2 }}>
            <span>
              <StarIcon />
            </span>
            <span className="text-sm font-light">
              <Button iconAfter={<ChevronDownIcon />}>Release</Button>
            </span>
            <span>
              <Button iconBefore={<ShareIcon />} />
            </span>
            <span>
              <Button iconBefore={<MoreIcon />} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex px-2">
        <div style={{ flex: 1 }}>
          <div className="flex bg-secondary items-center border-2 border-gray-300 rounded-sm p-1 mr-1 mx-2" style={{ background: white && 'white' }}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="pl-2 bg-secondary" style={{ background: white && 'white' }} onFocus={() => setWhite(true)} onBlur={() => setWhite(false)} />
            <Search />
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <AvatarGroup />
        </div>
        <div style={{ flex: 4 }} className="flex justify-start items-center">
          <div className="text-sm font-light">
            <Button isSelected={selected ? true : false} onClick={() => setSelected((prev) => !prev)} iconAfter={<ChevronDownIcon />}>
              Quick Filters
            </Button>
          </div>
          <div className="w-1 h-full border-r-2 border-gray-200 mx-4" />
          <div>
            <p className="text-gray-400 font-extralight text-sm cursor-pointer hover:opacity-50">Clear all</p>
          </div>
        </div>
      </div>
      <div className="h-[calc(100%-8rem)] w-full flex justify-between">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {BoardData.map(board => (
          <Board key={board.id} title={board.id} afterTitle={board.sub} projects={board.proj} />
        ))}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Kanban;

const Search = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
};
