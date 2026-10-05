document.addEventListener('DOMContentLoaded', function() {
            // 流派筛选功能
            const filterButtons = document.querySelectorAll('.filter-btn');
            const schoolCards = document.querySelectorAll('.school-card');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // 移除所有按钮的active类
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // 为当前点击的按钮添加active类
                    button.classList.add('active');
                    
                    const filter = button.getAttribute('data-filter');
                    
                    schoolCards.forEach(card => {
                        if (filter === 'all') {
                            card.style.display = 'block';
                        } else {
                            if (card.getAttribute('data-type') === filter) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        }
                    });
                });
            });
            
            // 模态框功能
            const modalLinks = document.querySelectorAll('.school-link');
            const modals = document.querySelectorAll('.modal');
            const closeButtons = document.querySelectorAll('.modal-close');
            
            modalLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const school = link.getAttribute('data-school');
                    const modal = document.getElementById(`modal-${school}`);
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // 防止背景滚动
                });
            });
            
            closeButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const modal = button.closest('.modal');
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto'; // 恢复滚动
                });
            });
            
            // 点击模态框外部关闭
            window.addEventListener('click', (e) => {
                modals.forEach(modal => {
                    if (e.target === modal) {
                        modal.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                });
            });
            
            // 订阅表单样式
            const subscribeForm = document.querySelector('.subscribe-form');
            if (subscribeForm) {
                subscribeForm.style.display = 'flex';
                subscribeForm.style.marginTop = '15px';
                
                const input = subscribeForm.querySelector('input');
                input.style.flex = '1';
                input.style.padding = '12px 15px';
                input.style.border = 'none';
                input.style.borderRadius = '4px 0 0 4px';
                input.style.outline = 'none';
                
                const button = subscribeForm.querySelector('button');
                button.style.padding = '12px 20px';
                button.style.background = '#e0c386';
                button.style.color = '#3d0b0b';
                button.style.border = 'none';
                button.style.borderRadius = '0 4px 4px 0';
                button.style.cursor = 'pointer';
                button.style.fontWeight = 'bold';
                button.style.transition = 'background 0.3s';
                
                button.addEventListener('mouseover', function() {
                    this.style.background = '#d4b577';
                });
                
                button.addEventListener('mouseout', function() {
                    this.style.background = '#e0c386';
                });
            }
        });