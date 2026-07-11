// Custom cursor elements. Positioning is handled by SiteEffects; both are
// hidden on touch devices / reduced-motion via CSS.
const Cursor = () => {
    return (
        <>
            <div className="cursor-ring" />
            <div className="cursor-dot" />
        </>
    )
}

export default Cursor
