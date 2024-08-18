import React, { Component } from 'react';
import PageWrap from "../templates/PageWrap";
import PageHeader from "../molecules/PageHeader";
import PostWrap from '../organisms/PostWrap';


export class Post extends Component {
	render() {
        return (
        <PageWrap page="Posts">
				<main>
					<PageHeader titleBg="Posts">
						My <span className="point">POSTs</span>
					</PageHeader>
					<section>
            <PostWrap />
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

export default Post;