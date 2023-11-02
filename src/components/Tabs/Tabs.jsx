import React from 'react';

export const Tabs = ({
  tabs,
  selectedTabId,
  selectedTabContent,
  onTabSelected,
}) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <React.Fragment>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {
            tabs.map(tab => (
              <li
                className={tab.id === currentTab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  key={tab.id}
                  onClick={() => {
                    if (tab.id !== currentTab.id) {
                      onTabSelected(tab || tabs[0]);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))
            }
          </ul>
        </div>
      </div>

      <div className="block" data-cy="TabContent">
        {`${currentTab.content}`}
      </div>
    </React.Fragment>
  );
};
