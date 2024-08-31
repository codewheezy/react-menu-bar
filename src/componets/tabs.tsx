type TabsProps = {
    activeContentIndex: number, 
    content: string[][],
    setActiveContentIndex: (index: number) => void,
}

const Tabs = ({activeContentIndex, setActiveContentIndex, content}: TabsProps) => {
    return(
        <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    )
}

export default Tabs