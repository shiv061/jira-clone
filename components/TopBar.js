import Image from 'next/image';
import Avatar from '@atlaskit/avatar';
import Button from '@atlaskit/button';

const TopBar = () => {
  return (
    <div className="flex p-2 border-b-2 shadow-sm h-16">
      <div className="flex items-center justify-center" style={{ flex: 2 }}>
        <span>
          <Image src="/jira-1.svg" width={25} height={25} />
        </span>
        <span>
          <h1 className="text-md text-gray-700 tracking-wider px-2">Welcome</h1>
        </span>
      </div>
      <div className="flex items-center w-full" style={{ flex: 6 }}>
        <ul className="flex flex-wrap">
          <li className="text-sm px-2 text-gray-500 flex items-center hover:bg-blue-100 hover:text-primary p-1 rounded-sm cursor-pointer">
            <p>Your Work</p>
            <DownArrow />
          </li>
          <li className="text-sm px-2 text-gray-500 flex items-center hover:bg-blue-100 hover:text-primary p-1 rounded-sm cursor-pointer">
            <p>Projects</p>
            <DownArrow />
          </li>
          <li className="text-sm px-2 text-gray-500 flex items-center hover:bg-blue-100 hover:text-primary p-1 rounded-sm cursor-pointer">
            <p>Filters</p>
            <DownArrow />
          </li>
          <li className="text-sm px-2 text-gray-500 flex items-center hover:bg-blue-100 hover:text-primary p-1 rounded-sm cursor-pointer">
            <p>Dashboards</p>
            <DownArrow />
          </li>
          <li className="text-sm px-2 text-gray-500 flex items-center hover:bg-blue-100 hover:text-primary p-1 rounded-sm cursor-pointer">
            <p>People</p>
            <DownArrow />
          </li>
          <li className="text-sm px-2 text-gray-500 flex items-center hover:bg-blue-100 hover:text-primary p-1 rounded-sm cursor-pointer">
            <p>Apps</p>
            <DownArrow />
          </li>
          <li className="text-sm px-2 text-gray-500 flex items-center">
            <Button appearance="primary">Create</Button>
          </li>
        </ul>
      </div>
      <div className="flex w-full items-center justify-between" style={{ flex: 2 }}>
        <div className="flex items-center border-2 border-gray-300 rounded-md p-1 mr-1">
          <Search />
          <input type="text" placeholder="Search" className="pl-2" />
        </div>
        <div className="px-2 cursor-pointer hover:opacity-50">
          <Bell />
        </div>
        <div className="px-2 cursor-pointer hover:opacity-50">
          <Help />
        </div>
        <div className="px-2 cursor-pointer hover:opacity-50">
          <Settings />
        </div>
        <div className="px-2 cursor-pointer hover:opacity-50">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default TopBar;

const DownArrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 pl-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
};

const Bell = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
    </svg>
  );
};

const Help = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  );
};

const Settings = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
};

const Search = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
};
