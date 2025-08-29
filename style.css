@media screen and (max-width: 576px) {
    .nav-bar{
        
        flex-direction: column;
        justify-items: center;
        text-align: center;
        gap: 15px;
    }

    .count-sec{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        
    }

    .hero-sec{
        width: 100% !important;
        max-width: 100% !important;
        margin: 0;                 /* remove side gaps */
        padding: 1rem;             /* comfortable inner spacing */
        box-sizing: border-box;    
        border-radius: 10px;       /* keep rounded corners, adjust if desired */
        left: 0;
    }

    /* ensure the main container doesn't add extra horizontal padding */
    .main-sec, .card-section {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .main-sec{
        width: 100%;
        flex-direction: column;
        gap: 0;
    }
    .card-section{
        
        
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        margin: auto;
    }

    .history-sec{
        width: 100%;
        margin-top: 20px;
    }

}

/* Responsive improvements (mobile-first) */
:root{
    --container-padding: 0.75rem;
}

/* Make images and logos scale */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Navbar */
.nav-bar{
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: var(--container-padding);
}
.nav-bar .w-15 {
    width: 48px;
    height: auto;
}

/* Counters and small badges */
.count-sec {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    align-items: center;
}

/* Hero section: stack on narrow screens */
.hero-sec{
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    gap: 0.75rem;
}

/* Main layout: flow vertically on small screens */
.main-sec{
    flex-direction: column;
    gap: 1rem;
    padding: var(--container-padding);
}

/* Card grid: responsive columns */
.card-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    padding: 0.5rem;
}

/* Ensure card contents don't force overflow */
.card-section > div,
.p-5 {
    min-width: 0;
    box-sizing: border-box;
}

/* History aside responsiveness */
.history-sec{
    width: 100%;
    max-height: 45vh; /* limit height on mobile */
    overflow-y: auto;
    padding: 0.75rem;
    box-sizing: border-box;
}

/* Call history list items: full-width rows with left/right layout */
#call-history {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}

#call-history li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    width: 100% !important;
    box-sizing: border-box;
    margin: 0 0 0.5rem 0 !important;
    padding: 0.6rem 0.75rem !important;
    border-radius: 0.6rem;
    background: #f3f4f6; /* subtle bg */
}

/* Left block (name + number) should keep them stacked */
#call-history li .left,
#call-history li .right {
    min-width: 0;
}

/* Service name: try to keep in one line, truncate if needed */
#call-history li .service-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
}

/* Phone number allows one line */
#call-history li .service-number {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.95rem;
}

/* Call time: never wrap, stay on same line */
#call-history li .call-time {
    white-space: nowrap;
    display: inline-block;
    margin-left: 0.5rem;
    color: #6b7280;
    font-size: 0.9rem;
    flex-shrink: 0; /* ensure it doesn't get pushed below */
}

/* Buttons and controls wrap nicely on small screens */
button, .btn {
    flex-shrink: 0;
}

/* Small / medium breakpoints tweaks */
@media (min-width: 577px) and (max-width: 900px) {
    .card-section { grid-template-columns: repeat(2, 1fr); }
    .history-sec { max-height: 60vh; }
}

@media (min-width: 901px) {
    .card-section { grid-template-columns: repeat(3, 1fr); }
    .history-sec { max-height: 80vh; }
}
