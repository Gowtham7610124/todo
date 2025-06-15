export function Tabs(props){
    const { todos,selectedTab,setSelectedTab } = props;
    const tabs = ['All','Open','Completed']
    return(
        <nav>
            {tabs.map((tab,index)=>{
                const noOfTasks = tab === 'All'?todos.length:
                tab === 'Open' ? todos.filter(val => !val.complete).length : 
                todos.filter(val => val.complete).length 
                return(
                    <button onClick={()=>{setSelectedTab(tab)}} className={"tab-button "+ (tab === selectedTab? 'tab-selected':'')} key={index}><h4>
                         {tab} &nbsp; <span>({noOfTasks})</span>
                        </h4></button>
                )
            })}
                <hr />

        </nav>
    )
}