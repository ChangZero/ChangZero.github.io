import React, { Component } from 'react';
import PageWrap from "../templates/PageWrap";
import PageHeader from "../molecules/PageHeader";
import ContactWrap from '../organisms/ContactWrap';


export class ContactPage extends Component {
	render() {
        return (
            <PageWrap page="contact">
				<main>
					<PageHeader titleBg="Contacts">
						My <span className="point">Address</span>
					</PageHeader>
					<section>
                        <ContactWrap />
					</section>
				</main>
			</PageWrap>
    //   <PageWrap page="contact"></PageWrap>>
    //     <Header page="contact" />
    //     <StyledContent>
    //         <ContactWrap />
    //     </StyledContent>
    //     <StyledFooter>
    //       <Footer />
    //     </StyledFooter>
    //   </StyledPage>
		);
	}
}

export default ContactPage;

